# Generated by Django 4.1.7 on 2023-05-22 22:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yaadman', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='accessoryproduct',
            name='accessory_details',
            field=models.TextField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='gasproduct',
            name='gas_details',
            field=models.TextField(default=0),
            preserve_default=False,
        ),
    ]
