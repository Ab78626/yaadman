# Generated by Django 4.1.7 on 2023-05-22 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='accessoryproduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('accessoryname', models.CharField(max_length=40)),
                ('accesory_price', models.FloatField()),
                ('accessory_image', models.ImageField(upload_to='pics')),
            ],
        ),
        migrations.CreateModel(
            name='gasproduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gas_name', models.CharField(max_length=40)),
                ('gas_price', models.IntegerField()),
                ('gas_image', models.ImageField(upload_to='pics')),
            ],
        ),
    ]
