/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * IntrastatConfigurationParams
 */
export interface IntrastatConfigurationParams {
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
   * Stat Code.
   * @nullable
   */
  statCode?: string;
  /**
   * Date From.
   * @nullable
   */
  dateFrom?: Moment;
  /**
   * Date To.
   * @nullable
   */
  dateTo?: Moment;
  /**
   * Country.
   * @nullable
   */
  country?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[IntrastatConfigurationParams.build]] instead.
 */
export function createIntrastatConfigurationParams(json: any): IntrastatConfigurationParams {
  return IntrastatConfigurationParams.build(json);
}

/**
 * IntrastatConfigurationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class IntrastatConfigurationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[IntrastatConfigurationParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[IntrastatConfigurationParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[IntrastatConfigurationParams.statCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StatCode', this, 'Edm.String');
  /**
   * Representation of the [[IntrastatConfigurationParams.dateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DateFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[IntrastatConfigurationParams.dateTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DateTo', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[IntrastatConfigurationParams.country]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Country', this, 'Edm.String');
}

export namespace IntrastatConfigurationParams {
  export function build(json: { [keys: string]: FieldType }): IntrastatConfigurationParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      StatCode: (statCode: string) => ({ statCode: edmToTs(statCode, 'Edm.String') }),
      DateFrom: (dateFrom: Moment) => ({ dateFrom: edmToTs(dateFrom, 'Edm.DateTimeOffset') }),
      DateTo: (dateTo: Moment) => ({ dateTo: edmToTs(dateTo, 'Edm.DateTimeOffset') }),
      Country: (country: string) => ({ country: edmToTs(country, 'Edm.String') })
    });
  }
}
