/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * AdvancedGlAccountReturnParams
 */
export interface AdvancedGlAccountReturnParams {
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[AdvancedGlAccountReturnParams.build]] instead.
 */
export function createAdvancedGlAccountReturnParams(json: any): AdvancedGlAccountReturnParams {
  return AdvancedGlAccountReturnParams.build(json);
}

/**
 * AdvancedGlAccountReturnParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AdvancedGlAccountReturnParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AdvancedGlAccountReturnParams> {
  /**
   * Representation of the [[AdvancedGlAccountReturnParams.accountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCode', this, 'Edm.String');

  /**
   * Creates an instance of AdvancedGlAccountReturnParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AdvancedGlAccountReturnParams);
  }
}

export namespace AdvancedGlAccountReturnParams {
  /**
   * Metadata information on all properties of the `AdvancedGlAccountReturnParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AdvancedGlAccountReturnParams>[] = [{
    originalName: 'AccountCode',
    name: 'accountCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AdvancedGlAccountReturnParams {
    return deserializeComplexTypeV4(json, AdvancedGlAccountReturnParams);
  }
}
