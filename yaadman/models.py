from django.db import models

class gasproduct (models.Model):
    gas_name= models.CharField(max_length=40)
    gas_details=models.TextField()
    gas_price=models.IntegerField()
    gas_image=models.ImageField(upload_to='pics')
    
     
    
class accessoryproduct(models.Model):
    accessoryname=models.CharField(max_length=40)
    accessory_details=models.TextField()
    accesory_price=models.FloatField()
    accessory_image=models.ImageField(upload_to='pics')