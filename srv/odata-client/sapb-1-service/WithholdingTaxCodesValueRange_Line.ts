/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WithholdingTaxCodesValueRange_Line
 */
export interface WithholdingTaxCodesValueRange_Line {
  /**
   * Value From.
   * @nullable
   */
  valueFrom?: number;
  /**
   * W Tax To Be Deductible.
   * @nullable
   */
  wTaxToBeDeductible?: number;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxCodesValueRange_Line.build]] instead.
 */
export function createWithholdingTaxCodesValueRange_Line(json: any): WithholdingTaxCodesValueRange_Line {
  return WithholdingTaxCodesValueRange_Line.build(json);
}

/**
 * WithholdingTaxCodesValueRange_LineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WithholdingTaxCodesValueRange_LineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WithholdingTaxCodesValueRange_Line.valueFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  valueFrom: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ValueFrom', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCodesValueRange_Line.wTaxToBeDeductible]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxToBeDeductible: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTaxToBeDeductible', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCodesValueRange_Line.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
}

export namespace WithholdingTaxCodesValueRange_Line {
  export function build(json: { [keys: string]: FieldType }): WithholdingTaxCodesValueRange_Line {
    return createComplexType(json, {
      ValueFrom: (valueFrom: number) => ({ valueFrom: edmToTs(valueFrom, 'Edm.Double') }),
      WTaxToBeDeductible: (wTaxToBeDeductible: number) => ({ wTaxToBeDeductible: edmToTs(wTaxToBeDeductible, 'Edm.Double') }),
      Rate: (rate: number) => ({ rate: edmToTs(rate, 'Edm.Double') })
    });
  }
}
