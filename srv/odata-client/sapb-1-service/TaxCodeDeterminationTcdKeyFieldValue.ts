/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxCodeDeterminationTcdKeyFieldValuePeriod, TaxCodeDeterminationTcdKeyFieldValuePeriodField } from './TaxCodeDeterminationTcdKeyFieldValuePeriod';
import { TaxCodeDeterminationTcdKeyFieldValueDefaultWt, TaxCodeDeterminationTcdKeyFieldValueDefaultWtField } from './TaxCodeDeterminationTcdKeyFieldValueDefaultWt';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TaxCodeDeterminationTcdKeyFieldValue
 */
export interface TaxCodeDeterminationTcdKeyFieldValue {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
  /**
   * Disp Order.
   * @nullable
   */
  dispOrder?: number;
  /**
   * Key Fld 1 V.
   * @nullable
   */
  keyFld1V?: string;
  /**
   * Key Fld 2 V.
   * @nullable
   */
  keyFld2V?: string;
  /**
   * Key Fld 3 V.
   * @nullable
   */
  keyFld3V?: string;
  /**
   * Key Fld 4 V.
   * @nullable
   */
  keyFld4V?: string;
  /**
   * Tax Code Determination Tcd Key Field Value Periods.
   * @nullable
   */
  taxCodeDeterminationTcdKeyFieldValuePeriods?: TaxCodeDeterminationTcdKeyFieldValuePeriod;
  /**
   * Tax Code Determination Tcd Key Field Value Default W Ts.
   * @nullable
   */
  taxCodeDeterminationTcdKeyFieldValueDefaultWTs?: TaxCodeDeterminationTcdKeyFieldValueDefaultWt;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValue.build]] instead.
 */
export function createTaxCodeDeterminationTcdKeyFieldValue(json: any): TaxCodeDeterminationTcdKeyFieldValue {
  return TaxCodeDeterminationTcdKeyFieldValue.build(json);
}

/**
 * TaxCodeDeterminationTcdKeyFieldValueField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationTcdKeyFieldValueField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.dispOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dispOrder: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DispOrder', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.keyFld1V]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld1V: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('KeyFld_1_V', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.keyFld2V]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld2V: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('KeyFld_2_V', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.keyFld3V]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld3V: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('KeyFld_3_V', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.keyFld4V]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld4V: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('KeyFld_4_V', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.taxCodeDeterminationTcdKeyFieldValuePeriods]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCodeDeterminationTcdKeyFieldValuePeriods: TaxCodeDeterminationTcdKeyFieldValuePeriodField<EntityT> = new TaxCodeDeterminationTcdKeyFieldValuePeriodField('TaxCodeDeterminationTCDKeyFieldValuePeriods', this);
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.taxCodeDeterminationTcdKeyFieldValueDefaultWTs]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCodeDeterminationTcdKeyFieldValueDefaultWTs: TaxCodeDeterminationTcdKeyFieldValueDefaultWtField<EntityT> = new TaxCodeDeterminationTcdKeyFieldValueDefaultWtField('TaxCodeDeterminationTCDKeyFieldValueDefaultWTs', this);
}

export namespace TaxCodeDeterminationTcdKeyFieldValue {
  export function build(json: { [keys: string]: FieldType | TaxCodeDeterminationTcdKeyFieldValueDefaultWt | TaxCodeDeterminationTcdKeyFieldValuePeriod }): TaxCodeDeterminationTcdKeyFieldValue {
    return createComplexType(json, {
      AbsId: (absId: number) => ({ absId: edmToTs(absId, 'Edm.Int32') }),
      DispOrder: (dispOrder: number) => ({ dispOrder: edmToTs(dispOrder, 'Edm.Int32') }),
      KeyFld_1_V: (keyFld1V: string) => ({ keyFld1V: edmToTs(keyFld1V, 'Edm.String') }),
      KeyFld_2_V: (keyFld2V: string) => ({ keyFld2V: edmToTs(keyFld2V, 'Edm.String') }),
      KeyFld_3_V: (keyFld3V: string) => ({ keyFld3V: edmToTs(keyFld3V, 'Edm.String') }),
      KeyFld_4_V: (keyFld4V: string) => ({ keyFld4V: edmToTs(keyFld4V, 'Edm.String') }),
      TaxCodeDeterminationTCDKeyFieldValuePeriods: (taxCodeDeterminationTcdKeyFieldValuePeriods: TaxCodeDeterminationTcdKeyFieldValuePeriod) => ({ taxCodeDeterminationTcdKeyFieldValuePeriods: TaxCodeDeterminationTcdKeyFieldValuePeriod.build(taxCodeDeterminationTcdKeyFieldValuePeriods) }),
      TaxCodeDeterminationTCDKeyFieldValueDefaultWTs: (taxCodeDeterminationTcdKeyFieldValueDefaultWTs: TaxCodeDeterminationTcdKeyFieldValueDefaultWt) => ({ taxCodeDeterminationTcdKeyFieldValueDefaultWTs: TaxCodeDeterminationTcdKeyFieldValueDefaultWt.build(taxCodeDeterminationTcdKeyFieldValueDefaultWTs) })
    });
  }
}
