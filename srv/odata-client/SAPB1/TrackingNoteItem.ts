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
 * TrackingNoteItem
 */
export interface TrackingNoteItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Tracking Note Number.
   * @nullable
   */
  trackingNoteNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Tracking Note Line Number.
   * @nullable
   */
  trackingNoteLineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Item Ccd Number.
   * @nullable
   */
  itemCcdNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Customs Group Code.
   * @nullable
   */
  customsGroupCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Accumulated Ap Quantity.
   * @nullable
   */
  accumulatedApQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accumulated Ar Quantity.
   * @nullable
   */
  accumulatedArQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accumulated Relocated Quantity.
   * @nullable
   */
  accumulatedRelocatedQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * TrackingNoteItemField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TrackingNoteItemField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TrackingNoteItem,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TrackingNoteItem.trackingNoteNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TrackingNoteNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link TrackingNoteItem.trackingNoteLineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteLineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TrackingNoteLineNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link TrackingNoteItem.itemCcdNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCcdNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCCDNumber', 'Edm.String', true);
  /**
   * Representation of the {@link TrackingNoteItem.itemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCode', 'Edm.String', true);
  /**
   * Representation of the {@link TrackingNoteItem.quantity} property for query construction.
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
   * Representation of the {@link TrackingNoteItem.countryOfOrigin} property for query construction.
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
   * Representation of the {@link TrackingNoteItem.customsGroupCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsGroupCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CustomsGroupCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link TrackingNoteItem.accumulatedApQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumulatedApQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumulatedAPQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link TrackingNoteItem.accumulatedArQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumulatedArQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumulatedARQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link TrackingNoteItem.accumulatedRelocatedQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumulatedRelocatedQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumulatedRelocatedQuantity',
    'Edm.Double',
    true
  );

  /**
   * Creates an instance of TrackingNoteItemField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, TrackingNoteItem, fieldOptions);
  }
}

export namespace TrackingNoteItem {
  /**
   * Metadata information on all properties of the `TrackingNoteItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TrackingNoteItem>[] = [
    {
      originalName: 'TrackingNoteNumber',
      name: 'trackingNoteNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TrackingNoteLineNumber',
      name: 'trackingNoteLineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ItemCCDNumber',
      name: 'itemCcdNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ItemCode',
      name: 'itemCode',
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
      originalName: 'CustomsGroupCode',
      name: 'customsGroupCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AccumulatedAPQuantity',
      name: 'accumulatedApQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumulatedARQuantity',
      name: 'accumulatedArQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumulatedRelocatedQuantity',
      name: 'accumulatedRelocatedQuantity',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
