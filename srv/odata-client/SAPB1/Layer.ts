/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransTypesEnum } from './TransTypesEnum';
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
 * Layer
 */
export interface Layer<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Transaction Sequence Num.
   * @nullable
   */
  transactionSequenceNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Layer Id.
   * @nullable
   */
  layerId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Doc Number.
   * @nullable
   */
  docNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Entry Date.
   * @nullable
   */
  entryDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Current Cost.
   * @nullable
   */
  currentCost?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Open Qty.
   * @nullable
   */
  openQty?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * LayerField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class LayerField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  Layer,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link Layer.transactionSequenceNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionSequenceNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TransactionSequenceNum',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link Layer.layerId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layerId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LayerID', 'Edm.Int32', true);
  /**
   * Representation of the {@link Layer.docNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocNumber', 'Edm.String', true);
  /**
   * Representation of the {@link Layer.docType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: EnumField<EntityT, DeSerializersT, TransTypesEnum, true, false> =
    this._fieldBuilder.buildEnumField('DocType', TransTypesEnum, true);
  /**
   * Representation of the {@link Layer.entryDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entryDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EntryDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link Layer.currentCost} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currentCost: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CurrentCost', 'Edm.Double', true);
  /**
   * Representation of the {@link Layer.openQty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openQty: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OpenQty', 'Edm.Double', true);

  /**
   * Creates an instance of LayerField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, Layer, fieldOptions);
  }
}

export namespace Layer {
  /**
   * Metadata information on all properties of the `Layer` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Layer>[] = [
    {
      originalName: 'TransactionSequenceNum',
      name: 'transactionSequenceNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LayerID',
      name: 'layerId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocNumber',
      name: 'docNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocType',
      name: 'docType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EntryDate',
      name: 'entryDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'CurrentCost',
      name: 'currentCost',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'OpenQty',
      name: 'openQty',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
