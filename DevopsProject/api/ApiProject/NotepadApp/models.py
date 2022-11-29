from django.db import models

# Create your models here.
# Create your models here.

class Notes(models.Model):
    NoteId = models.AutoField(primary_key=True)
    NoteDescription = models.CharField(max_length=500,default=None, blank=True, null=True)
    Title = models.CharField(max_length=500,default=None, blank=True, null=True)
    CreatedDate = models.DateTimeField(max_length=500,default=None, blank=True, null=True)
    UpdatedDate = models.DateTimeField(max_length=500,default=None, blank=True, null=True)
    CreatedBy = models.CharField(max_length=500,default=None, blank=True, null=True)
    UpdatedBy = models.CharField(max_length=500,default=None, blank=True, null=True)
    DeleteFlag = models.BooleanField(max_length=500,default=None, blank=True, null=True)
