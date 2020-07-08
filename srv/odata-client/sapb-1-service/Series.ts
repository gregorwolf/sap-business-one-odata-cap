/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * Series
 */
export interface Series {
  /**
   * Document.
   * @nullable
   */
  document?: string;
  /**
   * Document Sub Type.
   * @nullable
   */
  documentSubType?: string;
  /**
   * Initial Number.
   * @nullable
   */
  initialNumber?: number;
  /**
   * Last Number.
   * @nullable
   */
  lastNumber?: number;
  /**
   * Next Number.
   * @nullable
   */
  nextNumber?: number;
  /**
   * Prefix.
   * @nullable
   */
  prefix?: string;
  /**
   * Suffix.
   * @nullable
   */
  suffix?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: string;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Digit Number.
   * @nullable
   */
  digitNumber?: number;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
  /**
   * At Document Type.
   * @nullable
   */
  atDocumentType?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[Series.build]] instead.
 */
export function createSeries(json: any): Series {
  return Series.build(json);
}

/**
 * SeriesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SeriesField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Series.document]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  document: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Document', this, 'Edm.String');
  /**
   * Representation of the [[Series.documentSubType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentSubType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocumentSubType', this, 'Edm.String');
  /**
   * Representation of the [[Series.initialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  initialNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InitialNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[Series.lastNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LastNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[Series.nextNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nextNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NextNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[Series.prefix]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  prefix: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Prefix', this, 'Edm.String');
  /**
   * Representation of the [[Series.suffix]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  suffix: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Suffix', this, 'Edm.String');
  /**
   * Representation of the [[Series.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[Series.periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodIndicator: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PeriodIndicator', this, 'Edm.String');
  /**
   * Representation of the [[Series.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[Series.series]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Series', this, 'Edm.Int32');
  /**
   * Representation of the [[Series.digitNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  digitNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DigitNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[Series.bplid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BPLID', this, 'Edm.Int32');
  /**
   * Representation of the [[Series.atDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  atDocumentType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ATDocumentType', this, 'Edm.String');
}

export namespace Series {
  export function build(json: { [keys: string]: FieldType }): Series {
    return createComplexType(json, {
      Document: (document: string) => ({ document: edmToTs(document, 'Edm.String') }),
      DocumentSubType: (documentSubType: string) => ({ documentSubType: edmToTs(documentSubType, 'Edm.String') }),
      InitialNumber: (initialNumber: number) => ({ initialNumber: edmToTs(initialNumber, 'Edm.Int32') }),
      LastNumber: (lastNumber: number) => ({ lastNumber: edmToTs(lastNumber, 'Edm.Int32') }),
      NextNumber: (nextNumber: number) => ({ nextNumber: edmToTs(nextNumber, 'Edm.Int32') }),
      Prefix: (prefix: string) => ({ prefix: edmToTs(prefix, 'Edm.String') }),
      Suffix: (suffix: string) => ({ suffix: edmToTs(suffix, 'Edm.String') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') }),
      PeriodIndicator: (periodIndicator: string) => ({ periodIndicator: edmToTs(periodIndicator, 'Edm.String') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      Series: (series: number) => ({ series: edmToTs(series, 'Edm.Int32') }),
      DigitNumber: (digitNumber: number) => ({ digitNumber: edmToTs(digitNumber, 'Edm.Int32') }),
      BPLID: (bplid: number) => ({ bplid: edmToTs(bplid, 'Edm.Int32') }),
      ATDocumentType: (atDocumentType: string) => ({ atDocumentType: edmToTs(atDocumentType, 'Edm.String') })
    });
  }
}
