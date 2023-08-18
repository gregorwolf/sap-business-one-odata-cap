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
 * FifoLayer
 */
export interface FifoLayer<
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
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Price.
   * @nullable
   */
  price?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Line Total.
   * @nullable
   */
  lineTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Line.
   * @nullable
   */
  baseLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * FifoLayerField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class FifoLayerField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  FifoLayer,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link FifoLayer.transactionSequenceNum} property for query construction.
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
   * Representation of the {@link FifoLayer.layerId} property for query construction.
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
   * Representation of the {@link FifoLayer.quantity} property for query construction.
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
   * Representation of the {@link FifoLayer.price} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Price', 'Edm.Double', true);
  /**
   * Representation of the {@link FifoLayer.lineTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineTotal', 'Edm.Double', true);
  /**
   * Representation of the {@link FifoLayer.baseLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseLine', 'Edm.Int32', true);

  /**
   * Creates an instance of FifoLayerField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, FifoLayer, fieldOptions);
  }
}

export namespace FifoLayer {
  /**
   * Metadata information on all properties of the `FifoLayer` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<FifoLayer>[] = [
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
      originalName: 'Quantity',
      name: 'quantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Price',
      name: 'price',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LineTotal',
      name: 'lineTotal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseLine',
      name: 'baseLine',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
