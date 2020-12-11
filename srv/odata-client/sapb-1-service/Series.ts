/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoSeriesGroupEnum } from './BoSeriesGroupEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoSeriesTypeEnum } from './BoSeriesTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Group Code.
   * @nullable
   */
  groupCode?: BoSeriesGroupEnum;
  /**
   * Locked.
   * @nullable
   */
  locked?: BoYesNoEnum;
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
   * Is Digital Series.
   * @nullable
   */
  isDigitalSeries?: BoYesNoEnum;
  /**
   * Digit Number.
   * @nullable
   */
  digitNumber?: number;
  /**
   * Series Type.
   * @nullable
   */
  seriesType?: BoSeriesTypeEnum;
  /**
   * Is Manual.
   * @nullable
   */
  isManual?: BoYesNoEnum;
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
  /**
   * Is Electronic Comm Enabled.
   * @nullable
   */
  isElectronicCommEnabled?: BoYesNoEnum;
  /**
   * Cost Account Only.
   * @nullable
   */
  costAccountOnly?: BoYesNoEnum;
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
export class SeriesField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Series> {
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
   * Representation of the [[Series.groupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupCode: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('GroupCode', this);
  /**
   * Representation of the [[Series.locked]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locked: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Locked', this);
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
   * Representation of the [[Series.isDigitalSeries]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isDigitalSeries: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsDigitalSeries', this);
  /**
   * Representation of the [[Series.digitNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  digitNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DigitNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[Series.seriesType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  seriesType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SeriesType', this);
  /**
   * Representation of the [[Series.isManual]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isManual: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsManual', this);
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
  /**
   * Representation of the [[Series.isElectronicCommEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isElectronicCommEnabled: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsElectronicCommEnabled', this);
  /**
   * Representation of the [[Series.costAccountOnly]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costAccountOnly: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CostAccountOnly', this);

  /**
   * Creates an instance of SeriesField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, Series);
  }
}

export namespace Series {
  /**
   * Metadata information on all properties of the `Series` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Series>[] = [{
    originalName: 'Document',
    name: 'document',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocumentSubType',
    name: 'documentSubType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'InitialNumber',
    name: 'initialNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LastNumber',
    name: 'lastNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'NextNumber',
    name: 'nextNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Prefix',
    name: 'prefix',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Suffix',
    name: 'suffix',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'GroupCode',
    name: 'groupCode',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Locked',
    name: 'locked',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'PeriodIndicator',
    name: 'periodIndicator',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Series',
    name: 'series',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'IsDigitalSeries',
    name: 'isDigitalSeries',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DigitNumber',
    name: 'digitNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SeriesType',
    name: 'seriesType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'IsManual',
    name: 'isManual',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'BPLID',
    name: 'bplid',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ATDocumentType',
    name: 'atDocumentType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'IsElectronicCommEnabled',
    name: 'isElectronicCommEnabled',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CostAccountOnly',
    name: 'costAccountOnly',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): Series {
    return deserializeComplexTypeV4(json, Series);
  }
}
