/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoSoStatus } from './BoSoStatus';
import { BoAparDocumentTypes } from './BoAparDocumentTypes';
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
 * SalesOpportunitiesLine
 */
export interface SalesOpportunitiesLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Sales Person.
   * @nullable
   */
  salesPerson?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Closing Date.
   * @nullable
   */
  closingDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Stage Key.
   * @nullable
   */
  stageKey?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Percentage Rate.
   * @nullable
   */
  percentageRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Max Local Total.
   * @nullable
   */
  maxLocalTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Max System Total.
   * @nullable
   */
  maxSystemTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Contact.
   * @nullable
   */
  contact?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Weighted Amount Local.
   * @nullable
   */
  weightedAmountLocal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Weighted Amount System.
   * @nullable
   */
  weightedAmountSystem?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Document Number.
   * @nullable
   */
  documentNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Document Checkbox.
   * @nullable
   */
  documentCheckbox?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Contact Person.
   * @nullable
   */
  contactPerson?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bp Chanel Name.
   * @nullable
   */
  bpChanelName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Chanel Code.
   * @nullable
   */
  bpChanelCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Data Ownershipfield.
   * @nullable
   */
  dataOwnershipfield?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bp Channel Contact.
   * @nullable
   */
  bpChannelContact?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * SalesOpportunitiesLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunitiesLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SalesOpportunitiesLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SalesOpportunitiesLine.lineNum} property for query construction.
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
   * Representation of the {@link SalesOpportunitiesLine.salesPerson} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesPerson: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SalesPerson', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesOpportunitiesLine.startDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StartDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link SalesOpportunitiesLine.closingDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  closingDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ClosingDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link SalesOpportunitiesLine.stageKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StageKey', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesOpportunitiesLine.percentageRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percentageRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PercentageRate',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link SalesOpportunitiesLine.maxLocalTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxLocalTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MaxLocalTotal', 'Edm.Double', true);
  /**
   * Representation of the {@link SalesOpportunitiesLine.maxSystemTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxSystemTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'MaxSystemTotal',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link SalesOpportunitiesLine.remarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true);
  /**
   * Representation of the {@link SalesOpportunitiesLine.contact} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contact: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Contact', BoYesNoEnum, true);
  /**
   * Representation of the {@link SalesOpportunitiesLine.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: EnumField<EntityT, DeSerializersT, BoSoStatus, true, false> =
    this._fieldBuilder.buildEnumField('Status', BoSoStatus, true);
  /**
   * Representation of the {@link SalesOpportunitiesLine.weightedAmountLocal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weightedAmountLocal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WeightedAmountLocal',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link SalesOpportunitiesLine.weightedAmountSystem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weightedAmountSystem: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WeightedAmountSystem',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link SalesOpportunitiesLine.documentNumber} property for query construction.
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
   * Representation of the {@link SalesOpportunitiesLine.documentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentType: EnumField<
    EntityT,
    DeSerializersT,
    BoAparDocumentTypes,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DocumentType',
    BoAparDocumentTypes,
    true
  );
  /**
   * Representation of the {@link SalesOpportunitiesLine.documentCheckbox} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentCheckbox: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('DocumentCheckbox', BoYesNoEnum, true);
  /**
   * Representation of the {@link SalesOpportunitiesLine.contactPerson} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactPerson: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ContactPerson', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesOpportunitiesLine.bpChanelName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpChanelName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPChanelName', 'Edm.String', true);
  /**
   * Representation of the {@link SalesOpportunitiesLine.bpChanelCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpChanelCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPChanelCode', 'Edm.String', true);
  /**
   * Representation of the {@link SalesOpportunitiesLine.sequenceNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SequenceNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesOpportunitiesLine.dataOwnershipfield} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dataOwnershipfield: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DataOwnershipfield',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link SalesOpportunitiesLine.bpChannelContact} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpChannelContact: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BPChannelContact',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of SalesOpportunitiesLineField.
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
      SalesOpportunitiesLine,
      fieldOptions
    );
  }
}

export namespace SalesOpportunitiesLine {
  /**
   * Metadata information on all properties of the `SalesOpportunitiesLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesOpportunitiesLine>[] = [
    {
      originalName: 'LineNum',
      name: 'lineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SalesPerson',
      name: 'salesPerson',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StartDate',
      name: 'startDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ClosingDate',
      name: 'closingDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'StageKey',
      name: 'stageKey',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PercentageRate',
      name: 'percentageRate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'MaxLocalTotal',
      name: 'maxLocalTotal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'MaxSystemTotal',
      name: 'maxSystemTotal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Remarks',
      name: 'remarks',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Contact',
      name: 'contact',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Status',
      name: 'status',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'WeightedAmountLocal',
      name: 'weightedAmountLocal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WeightedAmountSystem',
      name: 'weightedAmountSystem',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DocumentNumber',
      name: 'documentNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocumentType',
      name: 'documentType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DocumentCheckbox',
      name: 'documentCheckbox',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ContactPerson',
      name: 'contactPerson',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BPChanelName',
      name: 'bpChanelName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPChanelCode',
      name: 'bpChanelCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SequenceNo',
      name: 'sequenceNo',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DataOwnershipfield',
      name: 'dataOwnershipfield',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BPChannelContact',
      name: 'bpChannelContact',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
