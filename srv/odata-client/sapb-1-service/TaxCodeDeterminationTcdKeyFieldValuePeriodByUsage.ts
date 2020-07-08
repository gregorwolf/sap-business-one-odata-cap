/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage
 */
export interface TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
  /**
   * Usage Code.
   * @nullable
   */
  usageCode?: number;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: string;
  /**
   * Exp Tax Code.
   * @nullable
   */
  expTaxCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.build]] instead.
 */
export function createTaxCodeDeterminationTcdKeyFieldValuePeriodByUsage(json: any): TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage {
  return TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.build(json);
}

/**
 * TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.usageCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  usageCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UsageCode', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxCode', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.expTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expTaxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExpTaxCode', this, 'Edm.String');
}

export namespace TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage {
  export function build(json: { [keys: string]: FieldType }): TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage {
    return createComplexType(json, {
      AbsId: (absId: number) => ({ absId: edmToTs(absId, 'Edm.Int32') }),
      UsageCode: (usageCode: number) => ({ usageCode: edmToTs(usageCode, 'Edm.Int32') }),
      TaxCode: (taxCode: string) => ({ taxCode: edmToTs(taxCode, 'Edm.String') }),
      ExpTaxCode: (expTaxCode: string) => ({ expTaxCode: edmToTs(expTaxCode, 'Edm.String') })
    });
  }
}
