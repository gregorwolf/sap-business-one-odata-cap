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
 * CcdNumber
 */
export interface CcdNumber<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Tracking Note.
   * @nullable
   */
  trackingNote?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Tracking Note Line.
   * @nullable
   */
  trackingNoteLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Ccd Number Property.
   * @nullable
   */
  ccdNumberProperty?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Country Of Origin.
   * @nullable
   */
  countryOfOrigin?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sub Line Number.
   * @nullable
   */
  subLineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Document Entry.
   * @nullable
   */
  documentEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Line Number.
   * @nullable
   */
  baseLineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Child Number.
   * @nullable
   */
  childNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * CcdNumberField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CcdNumberField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CcdNumber,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CcdNumber.trackingNote} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNote: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TrackingNote', 'Edm.Int32', true);
  /**
   * Representation of the {@link CcdNumber.trackingNoteLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TrackingNoteLine',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link CcdNumber.ccdNumberProperty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ccdNumberProperty: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CCDNumberProperty',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link CcdNumber.quantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Quantity', 'Edm.Double', true);
  /**
   * Representation of the {@link CcdNumber.countryOfOrigin} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countryOfOrigin: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CountryOfOrigin',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link CcdNumber.subLineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subLineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SubLineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link CcdNumber.documentEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link CcdNumber.baseLineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseLineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link CcdNumber.childNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  childNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ChildNumber', 'Edm.Int32', true);

  /**
   * Creates an instance of CcdNumberField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, CcdNumber, fieldOptions);
  }
}

export namespace CcdNumber {
  /**
   * Metadata information on all properties of the `CcdNumber` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CcdNumber>[] = [
    {
      originalName: 'TrackingNote',
      name: 'trackingNote',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TrackingNoteLine',
      name: 'trackingNoteLine',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CCDNumberProperty',
      name: 'ccdNumberProperty',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Quantity',
      name: 'quantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CountryOfOrigin',
      name: 'countryOfOrigin',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SubLineNumber',
      name: 'subLineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocumentEntry',
      name: 'documentEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BaseLineNumber',
      name: 'baseLineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ChildNumber',
      name: 'childNumber',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
