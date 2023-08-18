/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * DocumentLinesBinAllocation
 */
export interface DocumentLinesBinAllocation<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Bin Abs Entry.
   * @nullable
   */
  binAbsEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Allow Negative Quantity.
   * @nullable
   */
  allowNegativeQuantity?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Serial And Batch Numbers Base Line.
   * @nullable
   */
  serialAndBatchNumbersBaseLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Line Number.
   * @nullable
   */
  baseLineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * DocumentLinesBinAllocationField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentLinesBinAllocationField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DocumentLinesBinAllocation,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DocumentLinesBinAllocation.binAbsEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  binAbsEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BinAbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLinesBinAllocation.quantity} property for query construction.
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
   * Representation of the {@link DocumentLinesBinAllocation.allowNegativeQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allowNegativeQuantity: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AllowNegativeQuantity',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link DocumentLinesBinAllocation.serialAndBatchNumbersBaseLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialAndBatchNumbersBaseLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SerialAndBatchNumbersBaseLine',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocumentLinesBinAllocation.baseLineNumber} property for query construction.
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
   * Creates an instance of DocumentLinesBinAllocationField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      DocumentLinesBinAllocation,
      fieldOptions
    );
  }
}

export namespace DocumentLinesBinAllocation {
  /**
   * Metadata information on all properties of the `DocumentLinesBinAllocation` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentLinesBinAllocation>[] =
    [
      {
        originalName: 'BinAbsEntry',
        name: 'binAbsEntry',
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
        originalName: 'AllowNegativeQuantity',
        name: 'allowNegativeQuantity',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'SerialAndBatchNumbersBaseLine',
        name: 'serialAndBatchNumbersBaseLine',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'BaseLineNumber',
        name: 'baseLineNumber',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
