/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class WithholdingTaxCodesValueRange_LineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WithholdingTaxCodesValueRange_Line> {
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

  /**
   * Creates an instance of WithholdingTaxCodesValueRange_LineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WithholdingTaxCodesValueRange_Line);
  }
}

export namespace WithholdingTaxCodesValueRange_Line {
  /**
   * Metadata information on all properties of the `WithholdingTaxCodesValueRange_Line` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WithholdingTaxCodesValueRange_Line>[] = [{
    originalName: 'ValueFrom',
    name: 'valueFrom',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WTaxToBeDeductible',
    name: 'wTaxToBeDeductible',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Rate',
    name: 'rate',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WithholdingTaxCodesValueRange_Line {
    return deserializeComplexTypeV4(json, WithholdingTaxCodesValueRange_Line);
  }
}
