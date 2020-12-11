/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WithholdingTaxCodeParams
 */
export interface WithholdingTaxCodeParams {
  /**
   * Wt Code.
   * @nullable
   */
  wtCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxCodeParams.build]] instead.
 */
export function createWithholdingTaxCodeParams(json: any): WithholdingTaxCodeParams {
  return WithholdingTaxCodeParams.build(json);
}

/**
 * WithholdingTaxCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WithholdingTaxCodeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WithholdingTaxCodeParams> {
  /**
   * Representation of the [[WithholdingTaxCodeParams.wtCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTCode', this, 'Edm.String');

  /**
   * Creates an instance of WithholdingTaxCodeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WithholdingTaxCodeParams);
  }
}

export namespace WithholdingTaxCodeParams {
  /**
   * Metadata information on all properties of the `WithholdingTaxCodeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WithholdingTaxCodeParams>[] = [{
    originalName: 'WTCode',
    name: 'wtCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WithholdingTaxCodeParams {
    return deserializeComplexTypeV4(json, WithholdingTaxCodeParams);
  }
}
