/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoSvcExpPartTypes } from './BoSvcExpPartTypes';
import { BoSvcEpxDocTypes } from './BoSvcEpxDocTypes';
import { BoStckTrnDir } from './BoStckTrnDir';
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
 * ServiceCallInventoryExpense
 */
export interface ServiceCallInventoryExpense<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Part Type.
   * @nullable
   */
  partType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Document Posting Date.
   * @nullable
   */
  documentPostingDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Document Number.
   * @nullable
   */
  documentNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Stock Transfer Direction.
   * @nullable
   */
  stockTransferDirection?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * ServiceCallInventoryExpenseField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallInventoryExpenseField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ServiceCallInventoryExpense,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ServiceCallInventoryExpense.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link ServiceCallInventoryExpense.partType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  partType: EnumField<EntityT, DeSerializersT, BoSvcExpPartTypes, true, false> =
    this._fieldBuilder.buildEnumField('PartType', BoSvcExpPartTypes, true);
  /**
   * Representation of the {@link ServiceCallInventoryExpense.documentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentType: EnumField<
    EntityT,
    DeSerializersT,
    BoSvcEpxDocTypes,
    true,
    false
  > = this._fieldBuilder.buildEnumField('DocumentType', BoSvcEpxDocTypes, true);
  /**
   * Representation of the {@link ServiceCallInventoryExpense.documentPostingDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentPostingDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentPostingDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ServiceCallInventoryExpense.documentNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link ServiceCallInventoryExpense.stockTransferDirection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockTransferDirection: EnumField<
    EntityT,
    DeSerializersT,
    BoStckTrnDir,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'StockTransferDirection',
    BoStckTrnDir,
    true
  );
  /**
   * Representation of the {@link ServiceCallInventoryExpense.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);

  /**
   * Creates an instance of ServiceCallInventoryExpenseField.
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
      ServiceCallInventoryExpense,
      fieldOptions
    );
  }
}

export namespace ServiceCallInventoryExpense {
  /**
   * Metadata information on all properties of the `ServiceCallInventoryExpense` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceCallInventoryExpense>[] =
    [
      {
        originalName: 'LineNum',
        name: 'lineNum',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'PartType',
        name: 'partType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'DocumentType',
        name: 'documentType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'DocumentPostingDate',
        name: 'documentPostingDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'DocumentNumber',
        name: 'documentNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'StockTransferDirection',
        name: 'stockTransferDirection',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'DocEntry',
        name: 'docEntry',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
