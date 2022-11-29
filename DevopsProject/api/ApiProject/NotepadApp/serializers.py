from rest_framework import serializers
from NotepadApp.models import Notes

class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Notes 
        fields=('NoteId','NoteDescription','Title','CreatedDate','UpdatedDate','CreatedBy','UpdatedBy','DeleteFlag')
