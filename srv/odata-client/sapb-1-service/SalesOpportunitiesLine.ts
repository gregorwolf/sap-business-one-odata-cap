/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class SalesOpportunitiesLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace SalesOpportunitiesLine {
  export function build(json: { [keys: string]: FieldType }): SalesOpportunitiesLine {
    return createComplexType(json, {
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      SalesPerson: (salesPerson: number) => ({ salesPerson: edmToTs(salesPerson, 'Edm.Int32') }),
      StartDate: (startDate: Moment) => ({ startDate: edmToTs(startDate, 'Edm.DateTimeOffset') }),
      ClosingDate: (closingDate: Moment) => ({ closingDate: edmToTs(closingDate, 'Edm.DateTimeOffset') }),
      StageKey: (stageKey: number) => ({ stageKey: edmToTs(stageKey, 'Edm.Int32') }),
      PercentageRate: (percentageRate: number) => ({ percentageRate: edmToTs(percentageRate, 'Edm.Double') }),
      MaxLocalTotal: (maxLocalTotal: number) => ({ maxLocalTotal: edmToTs(maxLocalTotal, 'Edm.Double') }),
      MaxSystemTotal: (maxSystemTotal: number) => ({ maxSystemTotal: edmToTs(maxSystemTotal, 'Edm.Double') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') }),
      WeightedAmountLocal: (weightedAmountLocal: number) => ({ weightedAmountLocal: edmToTs(weightedAmountLocal, 'Edm.Double') }),
      WeightedAmountSystem: (weightedAmountSystem: number) => ({ weightedAmountSystem: edmToTs(weightedAmountSystem, 'Edm.Double') }),
      DocumentNumber: (documentNumber: number) => ({ documentNumber: edmToTs(documentNumber, 'Edm.Int32') }),
      ContactPerson: (contactPerson: number) => ({ contactPerson: edmToTs(contactPerson, 'Edm.Int32') }),
      BPChanelName: (bpChanelName: string) => ({ bpChanelName: edmToTs(bpChanelName, 'Edm.String') }),
      BPChanelCode: (bpChanelCode: string) => ({ bpChanelCode: edmToTs(bpChanelCode, 'Edm.String') }),
      SequenceNo: (sequenceNo: number) => ({ sequenceNo: edmToTs(sequenceNo, 'Edm.Int32') }),
      DataOwnershipfield: (dataOwnershipfield: number) => ({ dataOwnershipfield: edmToTs(dataOwnershipfield, 'Edm.Int32') }),
      BPChannelContact: (bpChannelContact: number) => ({ bpChannelContact: edmToTs(bpChannelContact, 'Edm.Int32') })
    });
  }
}
