/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoSoStatus } from './BoSoStatus';
import { BoAparDocumentTypes } from './BoAparDocumentTypes';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SalesOpportunitiesLine
 */
export interface SalesOpportunitiesLine {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Sales Person.
   * @nullable
   */
  salesPerson?: number;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Closing Date.
   * @nullable
   */
  closingDate?: Moment;
  /**
   * Stage Key.
   * @nullable
   */
  stageKey?: number;
  /**
   * Percentage Rate.
   * @nullable
   */
  percentageRate?: number;
  /**
   * Max Local Total.
   * @nullable
   */
  maxLocalTotal?: number;
  /**
   * Max System Total.
   * @nullable
   */
  maxSystemTotal?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Contact.
   * @nullable
   */
  contact?: BoYesNoEnum;
  /**
   * Status.
   * @nullable
   */
  status?: BoSoStatus;
  /**
   * Weighted Amount Local.
   * @nullable
   */
  weightedAmountLocal?: number;
  /**
   * Weighted Amount System.
   * @nullable
   */
  weightedAmountSystem?: number;
  /**
   * Document Number.
   * @nullable
   */
  documentNumber?: number;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: BoAparDocumentTypes;
  /**
   * Document Checkbox.
   * @nullable
   */
  documentCheckbox?: BoYesNoEnum;
  /**
   * Contact Person.
   * @nullable
   */
  contactPerson?: number;
  /**
   * Bp Chanel Name.
   * @nullable
   */
  bpChanelName?: string;
  /**
   * Bp Chanel Code.
   * @nullable
   */
  bpChanelCode?: string;
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: number;
  /**
   * Data Ownershipfield.
   * @nullable
   */
  dataOwnershipfield?: number;
  /**
   * Bp Channel Contact.
   * @nullable
   */
  bpChannelContact?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesLine.build]] instead.
 */
export function createSalesOpportunitiesLine(json: any): SalesOpportunitiesLine {
  return SalesOpportunitiesLine.build(json);
}

/**
 * SalesOpportunitiesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunitiesLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesOpportunitiesLine> {
  /**
   * Representation of the [[SalesOpportunitiesLine.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesLine.salesPerson]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesPerson: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SalesPerson', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesLine.startDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('StartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[SalesOpportunitiesLine.closingDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  closingDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ClosingDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[SalesOpportunitiesLine.stageKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageKey', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesLine.percentageRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percentageRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PercentageRate', this, 'Edm.Double');
  /**
   * Representation of the [[SalesOpportunitiesLine.maxLocalTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxLocalTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MaxLocalTotal', this, 'Edm.Double');
  /**
   * Representation of the [[SalesOpportunitiesLine.maxSystemTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxSystemTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MaxSystemTotal', this, 'Edm.Double');
  /**
   * Representation of the [[SalesOpportunitiesLine.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[SalesOpportunitiesLine.contact]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contact: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Contact', this);
  /**
   * Representation of the [[SalesOpportunitiesLine.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Status', this);
  /**
   * Representation of the [[SalesOpportunitiesLine.weightedAmountLocal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weightedAmountLocal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WeightedAmountLocal', this, 'Edm.Double');
  /**
   * Representation of the [[SalesOpportunitiesLine.weightedAmountSystem]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weightedAmountSystem: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WeightedAmountSystem', this, 'Edm.Double');
  /**
   * Representation of the [[SalesOpportunitiesLine.documentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesLine.documentType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DocumentType', this);
  /**
   * Representation of the [[SalesOpportunitiesLine.documentCheckbox]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentCheckbox: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DocumentCheckbox', this);
  /**
   * Representation of the [[SalesOpportunitiesLine.contactPerson]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactPerson: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ContactPerson', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesLine.bpChanelName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpChanelName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPChanelName', this, 'Edm.String');
  /**
   * Representation of the [[SalesOpportunitiesLine.bpChanelCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpChanelCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPChanelCode', this, 'Edm.String');
  /**
   * Representation of the [[SalesOpportunitiesLine.sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesLine.dataOwnershipfield]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dataOwnershipfield: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DataOwnershipfield', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesLine.bpChannelContact]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpChannelContact: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BPChannelContact', this, 'Edm.Int32');

  /**
   * Creates an instance of SalesOpportunitiesLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SalesOpportunitiesLine);
  }
}

export namespace SalesOpportunitiesLine {
  /**
   * Metadata information on all properties of the `SalesOpportunitiesLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesOpportunitiesLine>[] = [{
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SalesPerson',
    name: 'salesPerson',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StartDate',
    name: 'startDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ClosingDate',
    name: 'closingDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'StageKey',
    name: 'stageKey',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PercentageRate',
    name: 'percentageRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'MaxLocalTotal',
    name: 'maxLocalTotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'MaxSystemTotal',
    name: 'maxSystemTotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Contact',
    name: 'contact',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Status',
    name: 'status',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'WeightedAmountLocal',
    name: 'weightedAmountLocal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WeightedAmountSystem',
    name: 'weightedAmountSystem',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DocumentNumber',
    name: 'documentNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocumentType',
    name: 'documentType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DocumentCheckbox',
    name: 'documentCheckbox',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ContactPerson',
    name: 'contactPerson',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BPChanelName',
    name: 'bpChanelName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPChanelCode',
    name: 'bpChanelCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SequenceNo',
    name: 'sequenceNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DataOwnershipfield',
    name: 'dataOwnershipfield',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BPChannelContact',
    name: 'bpChannelContact',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SalesOpportunitiesLine {
    return deserializeComplexTypeV4(json, SalesOpportunitiesLine);
  }
}
