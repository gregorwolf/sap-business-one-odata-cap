/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage, TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField } from './TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TaxCodeDeterminationTcdKeyFieldValuePeriod
 */
export interface TaxCodeDeterminationTcdKeyFieldValuePeriod {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
  /**
   * Efct From.
   * @nullable
   */
  efctFrom?: Moment;
  /**
   * Efct To.
   * @nullable
   */
  efctTo?: Moment;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: string;
  /**
   * Tax Code Determination Tcd Key Field Value Period By Usages.
   * @nullable
   */
  taxCodeDeterminationTcdKeyFieldValuePeriodByUsages?: TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValuePeriod.build]] instead.
 */
export function createTaxCodeDeterminationTcdKeyFieldValuePeriod(json: any): TaxCodeDeterminationTcdKeyFieldValuePeriod {
  return TaxCodeDeterminationTcdKeyFieldValuePeriod.build(json);
}

/**
 * TaxCodeDeterminationTcdKeyFieldValuePeriodField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationTcdKeyFieldValuePeriodField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.efctFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  efctFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EfctFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.efctTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  efctTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EfctTo', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxCode', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.taxCodeDeterminationTcdKeyFieldValuePeriodByUsages]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCodeDeterminationTcdKeyFieldValuePeriodByUsages: TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField<EntityT> = new TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField('TaxCodeDeterminationTCDKeyFieldValuePeriodByUsages', this);
}

export namespace TaxCodeDeterminationTcdKeyFieldValuePeriod {
  export function build(json: { [keys: string]: FieldType | TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage }): TaxCodeDeterminationTcdKeyFieldValuePeriod {
    return createComplexType(json, {
      AbsId: (absId: number) => ({ absId: edmToTs(absId, 'Edm.Int32') }),
      EfctFrom: (efctFrom: Moment) => ({ efctFrom: edmToTs(efctFrom, 'Edm.DateTimeOffset') }),
      EfctTo: (efctTo: Moment) => ({ efctTo: edmToTs(efctTo, 'Edm.DateTimeOffset') }),
      TaxCode: (taxCode: string) => ({ taxCode: edmToTs(taxCode, 'Edm.String') }),
      TaxCodeDeterminationTCDKeyFieldValuePeriodByUsages: (taxCodeDeterminationTcdKeyFieldValuePeriodByUsages: TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage) => ({ taxCodeDeterminationTcdKeyFieldValuePeriodByUsages: TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.build(taxCodeDeterminationTcdKeyFieldValuePeriodByUsages) })
    });
  }
}
