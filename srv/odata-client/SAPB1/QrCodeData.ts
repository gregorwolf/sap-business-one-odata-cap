/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * QrCodeData
 */
export interface QrCodeData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Object Type.
   * @nullable
   */
  objectType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Object Abs Entry.
   * @nullable
   */
  objectAbsEntry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Field Name.
   * @nullable
   */
  fieldName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Qr Code Text.
   * @nullable
   */
  qrCodeText?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * QrCodeDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class QrCodeDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  QrCodeData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link QrCodeData.objectType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ObjectType', 'Edm.Int32', true);
  /**
   * Representation of the {@link QrCodeData.objectAbsEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectAbsEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ObjectAbsEntry',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link QrCodeData.fieldName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FieldName', 'Edm.String', true);
  /**
   * Representation of the {@link QrCodeData.qrCodeText} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  qrCodeText: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('QRCodeText', 'Edm.String', true);

  /**
   * Creates an instance of QrCodeDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, QrCodeData, fieldOptions);
  }
}

export namespace QrCodeData {
  /**
   * Metadata information on all properties of the `QrCodeData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<QrCodeData>[] = [
    {
      originalName: 'ObjectType',
      name: 'objectType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ObjectAbsEntry',
      name: 'objectAbsEntry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FieldName',
      name: 'fieldName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'QRCodeText',
      name: 'qrCodeText',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
