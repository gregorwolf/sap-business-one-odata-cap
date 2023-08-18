/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PmDocumentTypeEnum } from './PmDocumentTypeEnum';
import { LineStatusTypeEnum } from './LineStatusTypeEnum';
import { AmountCatTypeEnum } from './AmountCatTypeEnum';
import { PmCategorizeTypeEnum } from './PmCategorizeTypeEnum';
import { PmOperationTypeEnum } from './PmOperationTypeEnum';
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
 * PmsDocumentData
 */
export interface PmsDocumentData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Id.
   * @nullable
   */
  lineId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Doc Date.
   * @nullable
   */
  docDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Total.
   * @nullable
   */
  total?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Amount Category.
   * @nullable
   */
  amountCategory?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Categorize.
   * @nullable
   */
  categorize?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Operation.
   * @nullable
   */
  operation?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * PmsDocumentDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmsDocumentDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PmsDocumentData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PmsDocumentData.lineId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmsDocumentData.stageId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StageID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmsDocumentData.docType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: EnumField<EntityT, DeSerializersT, PmDocumentTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('DocType', PmDocumentTypeEnum, true);
  /**
   * Representation of the {@link PmsDocumentData.docEntry} property for query construction.
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
   * Representation of the {@link PmsDocumentData.docDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PmsDocumentData.total} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  total: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Total', 'Edm.Double', true);
  /**
   * Representation of the {@link PmsDocumentData.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmsDocumentData.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: EnumField<EntityT, DeSerializersT, LineStatusTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('Status', LineStatusTypeEnum, true);
  /**
   * Representation of the {@link PmsDocumentData.amountCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountCategory: EnumField<
    EntityT,
    DeSerializersT,
    AmountCatTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AmountCategory',
    AmountCatTypeEnum,
    true
  );
  /**
   * Representation of the {@link PmsDocumentData.categorize} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  categorize: EnumField<
    EntityT,
    DeSerializersT,
    PmCategorizeTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Categorize',
    PmCategorizeTypeEnum,
    true
  );
  /**
   * Representation of the {@link PmsDocumentData.operation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  operation: EnumField<
    EntityT,
    DeSerializersT,
    PmOperationTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('Operation', PmOperationTypeEnum, true);

  /**
   * Creates an instance of PmsDocumentDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PmsDocumentData, fieldOptions);
  }
}

export namespace PmsDocumentData {
  /**
   * Metadata information on all properties of the `PmsDocumentData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmsDocumentData>[] = [
    {
      originalName: 'LineID',
      name: 'lineId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StageID',
      name: 'stageId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocType',
      name: 'docType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocDate',
      name: 'docDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Total',
      name: 'total',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Status',
      name: 'status',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AmountCategory',
      name: 'amountCategory',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Categorize',
      name: 'categorize',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Operation',
      name: 'operation',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
