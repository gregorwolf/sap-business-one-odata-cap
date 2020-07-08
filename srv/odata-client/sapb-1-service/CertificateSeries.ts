/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CertificateSeriesRequestBuilder } from './CertificateSeriesRequestBuilder';
import { SeriesLine, SeriesLineField } from './SeriesLine';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "CertificateSeries" of service "SAPB1".
 */
export class CertificateSeries extends Entity implements CertificateSeriesType {
  /**
   * Technical entity name for CertificateSeries.
   */
  static _entityName = 'CertificateSeries';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CertificateSeries.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Section.
   * @nullable
   */
  section?: number;
  /**
   * Location.
   * @nullable
   */
  location?: number;
  /**
   * Default Series.
   * @nullable
   */
  defaultSeries?: number;
  /**
   * Series Lines.
   * @nullable
   */
  seriesLines?: SeriesLine[];
  /**
   * One-to-one navigation property to the [[Sections]] entity.
   */
  section2!: Sections;
  /**
   * One-to-one navigation property to the [[WarehouseLocations]] entity.
   */
  warehouseLocation!: WarehouseLocations;

  /**
   * Returns an entity builder to construct instances `CertificateSeries`.
   * @returns A builder that constructs instances of entity type `CertificateSeries`.
   */
  static builder(): EntityBuilderType<CertificateSeries, CertificateSeriesTypeForceMandatory> {
    return Entity.entityBuilder(CertificateSeries);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CertificateSeries` entity type.
   * @returns A `CertificateSeries` request builder.
   */
  static requestBuilder(): CertificateSeriesRequestBuilder {
    return new CertificateSeriesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CertificateSeries`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CertificateSeries`.
   */
  static customField(fieldName: string): CustomField<CertificateSeries> {
    return Entity.customFieldSelector(fieldName, CertificateSeries);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Sections, SectionsType } from './Sections';
import { WarehouseLocations, WarehouseLocationsType } from './WarehouseLocations';

export interface CertificateSeriesType {
  absEntry?: number;
  code?: string;
  section?: number;
  location?: number;
  defaultSeries?: number;
  seriesLines?: SeriesLine[];
  section2: SectionsType;
  warehouseLocation: WarehouseLocationsType;
}

export interface CertificateSeriesTypeForceMandatory {
  absEntry: number;
  code: string;
  section: number;
  location: number;
  defaultSeries: number;
  seriesLines: SeriesLine[];
  section2: SectionsType;
  warehouseLocation: WarehouseLocationsType;
}

export namespace CertificateSeries {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<CertificateSeries> = new NumberField('AbsEntry', CertificateSeries, 'Edm.Int32');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<CertificateSeries> = new StringField('Code', CertificateSeries, 'Edm.String');
  /**
   * Static representation of the [[section]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION: NumberField<CertificateSeries> = new NumberField('Section', CertificateSeries, 'Edm.Int32');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: NumberField<CertificateSeries> = new NumberField('Location', CertificateSeries, 'Edm.Int32');
  /**
   * Static representation of the [[defaultSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_SERIES: NumberField<CertificateSeries> = new NumberField('DefaultSeries', CertificateSeries, 'Edm.Int32');
  /**
   * Static representation of the [[seriesLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES_LINES: CollectionField<CertificateSeries> = new CollectionField('SeriesLines', CertificateSeries, new SeriesLineField('', CertificateSeries));
  /**
   * Static representation of the one-to-one navigation property [[section2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_2: OneToOneLink<CertificateSeries, Sections> = new OneToOneLink('Section2', CertificateSeries, Sections);
  /**
   * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE_LOCATION: OneToOneLink<CertificateSeries, WarehouseLocations> = new OneToOneLink('WarehouseLocation', CertificateSeries, WarehouseLocations);
  /**
   * All fields of the CertificateSeries entity.
   */
  export const _allFields: Array<NumberField<CertificateSeries> | StringField<CertificateSeries> | CollectionField<CertificateSeries> | OneToOneLink<CertificateSeries, Sections> | OneToOneLink<CertificateSeries, WarehouseLocations>> = [
    CertificateSeries.ABS_ENTRY,
    CertificateSeries.CODE,
    CertificateSeries.SECTION,
    CertificateSeries.LOCATION,
    CertificateSeries.DEFAULT_SERIES,
    CertificateSeries.SERIES_LINES,
    CertificateSeries.SECTION_2,
    CertificateSeries.WAREHOUSE_LOCATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CertificateSeries> = new AllFields('*', CertificateSeries);
  /**
   * All key fields of the CertificateSeries entity.
   */
  export const _keyFields: Array<Field<CertificateSeries>> = [CertificateSeries.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property CertificateSeries.
   */
  export const _keys: { [keys: string]: Field<CertificateSeries> } = CertificateSeries._keyFields.reduce((acc: { [keys: string]: Field<CertificateSeries> }, field: Field<CertificateSeries>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
