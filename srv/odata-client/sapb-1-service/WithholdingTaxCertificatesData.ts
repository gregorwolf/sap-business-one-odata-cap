/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { WtGroups, WtGroupsField } from './WtGroups';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WithholdingTaxCertificatesData
 */
export interface WithholdingTaxCertificatesData {
  /**
   * Poi Code Ref.
   * @nullable
   */
  poiCodeRef?: string;
  /**
   * Poi Code.
   * @nullable
   */
  poiCode?: string;
  /**
   * Certificate.
   * @nullable
   */
  certificate?: string;
  /**
   * W Tax Type.
   * @nullable
   */
  wTaxType?: string;
  /**
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: string;
  /**
   * Wht Abs Id.
   * @nullable
   */
  whtAbsId?: number;
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Number.
   * @nullable
   */
  number?: number;
  /**
   * Issue Date.
   * @nullable
   */
  issueDate?: Moment;
  /**
   * Sum Vat Amount.
   * @nullable
   */
  sumVatAmount?: number;
  /**
   * Sum Doc Total.
   * @nullable
   */
  sumDocTotal?: number;
  /**
   * Sum Base Amount.
   * @nullable
   */
  sumBaseAmount?: number;
  /**
   * Sum Accum Amount.
   * @nullable
   */
  sumAccumAmount?: number;
  /**
   * Sum Perc Amount.
   * @nullable
   */
  sumPercAmount?: number;
  /**
   * Wt Groups Collection.
   * @nullable
   */
  wtGroupsCollection?: WtGroups;
}

/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxCertificatesData.build]] instead.
 */
export function createWithholdingTaxCertificatesData(json: any): WithholdingTaxCertificatesData {
  return WithholdingTaxCertificatesData.build(json);
}

/**
 * WithholdingTaxCertificatesDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WithholdingTaxCertificatesDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WithholdingTaxCertificatesData.poiCodeRef]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  poiCodeRef: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('POICodeRef', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.poiCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  poiCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('POICode', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.certificate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  certificate: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Certificate', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.wTaxType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTaxType', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodIndicator: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PeriodIndicator', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.whtAbsId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  whtAbsId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WhtAbsId', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.series]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Series', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.number]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  number: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Number', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.issueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  issueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('IssueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.sumVatAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumVatAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumVATAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.sumDocTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumDocTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumDocTotal', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.sumBaseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumBaseAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumBaseAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.sumAccumAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumAccumAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumAccumAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.sumPercAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumPercAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumPercAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.wtGroupsCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtGroupsCollection: WtGroupsField<EntityT> = new WtGroupsField('WTGroupsCollection', this);
}

export namespace WithholdingTaxCertificatesData {
  export function build(json: { [keys: string]: FieldType | WtGroups }): WithholdingTaxCertificatesData {
    return createComplexType(json, {
      POICodeRef: (poiCodeRef: string) => ({ poiCodeRef: edmToTs(poiCodeRef, 'Edm.String') }),
      POICode: (poiCode: string) => ({ poiCode: edmToTs(poiCode, 'Edm.String') }),
      Certificate: (certificate: string) => ({ certificate: edmToTs(certificate, 'Edm.String') }),
      WTaxType: (wTaxType: string) => ({ wTaxType: edmToTs(wTaxType, 'Edm.String') }),
      PeriodIndicator: (periodIndicator: string) => ({ periodIndicator: edmToTs(periodIndicator, 'Edm.String') }),
      WhtAbsId: (whtAbsId: number) => ({ whtAbsId: edmToTs(whtAbsId, 'Edm.Int32') }),
      Series: (series: number) => ({ series: edmToTs(series, 'Edm.Int32') }),
      Number: (number: number) => ({ number: edmToTs(number, 'Edm.Int32') }),
      IssueDate: (issueDate: Moment) => ({ issueDate: edmToTs(issueDate, 'Edm.DateTimeOffset') }),
      SumVATAmount: (sumVatAmount: number) => ({ sumVatAmount: edmToTs(sumVatAmount, 'Edm.Double') }),
      SumDocTotal: (sumDocTotal: number) => ({ sumDocTotal: edmToTs(sumDocTotal, 'Edm.Double') }),
      SumBaseAmount: (sumBaseAmount: number) => ({ sumBaseAmount: edmToTs(sumBaseAmount, 'Edm.Double') }),
      SumAccumAmount: (sumAccumAmount: number) => ({ sumAccumAmount: edmToTs(sumAccumAmount, 'Edm.Double') }),
      SumPercAmount: (sumPercAmount: number) => ({ sumPercAmount: edmToTs(sumPercAmount, 'Edm.Double') }),
      WTGroupsCollection: (wtGroupsCollection: WtGroups) => ({ wtGroupsCollection: WtGroups.build(wtGroupsCollection) })
    });
  }
}
