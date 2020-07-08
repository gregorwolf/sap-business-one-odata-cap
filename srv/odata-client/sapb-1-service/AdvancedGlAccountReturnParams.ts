/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class AdvancedGlAccountReturnParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[AdvancedGlAccountReturnParams.accountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCode', this, 'Edm.String');
}

export namespace AdvancedGlAccountReturnParams {
  export function build(json: { [keys: string]: FieldType }): AdvancedGlAccountReturnParams {
    return createComplexType(json, {
      AccountCode: (accountCode: string) => ({ accountCode: edmToTs(accountCode, 'Edm.String') })
    });
  }
}
