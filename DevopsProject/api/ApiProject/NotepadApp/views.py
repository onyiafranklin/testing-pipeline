from django.shortcuts import render

# Create your views here.
# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from NotepadApp.models import Notes
from NotepadApp.serializers import NotesSerializer

# from django.core.files.storage import default_storage

# Create your views here.

@csrf_exempt
def nodePadApi(request,id=0):
    if request.method=='GET':
        notes = Notes.objects.all()
        notesSerializer=NotesSerializer(notes,many=True)
        return JsonResponse(notesSerializer.data,safe=False)
    elif request.method=='POST':
        notes_data=JSONParser().parse(request)
        notesSerializer=NotesSerializer(data=notes_data)
        if notesSerializer.is_valid():
            notesSerializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        notes_data=JSONParser().parse(request)
        notes=Notes.objects.get(NoteId=notes_data['NoteId'])
        notesSerializer=NotesSerializer(notes,data=notes_data)
        if notesSerializer.is_valid():
            notesSerializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        notes=Notes.objects.get(NoteId=id)
        notes.delete()
        return JsonResponse("Deleted Successfully",safe=False)
