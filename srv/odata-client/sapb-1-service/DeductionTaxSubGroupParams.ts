/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DeductionTaxSubGroupParams
 */
export interface DeductionTaxSubGroupParams {
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: string;
  /**
   * Group Name.
   * @nullable
   */
  groupName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[DeductionTaxSubGroupParams.build]] instead.
 */
export function createDeductionTaxSubGroupParams(json: any): DeductionTaxSubGroupParams {
  return DeductionTaxSubGroupParams.build(json);
}

/**
 * DeductionTaxSubGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DeductionTaxSubGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DeductionTaxSubGroupParams.groupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GroupCode', this, 'Edm.String');
  /**
   * Representation of the [[DeductionTaxSubGroupParams.groupName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GroupName', this, 'Edm.String');
}

export namespace DeductionTaxSubGroupParams {
  export function build(json: { [keys: string]: FieldType }): DeductionTaxSubGroupParams {
    return createComplexType(json, {
      GroupCode: (groupCode: string) => ({ groupCode: edmToTs(groupCode, 'Edm.String') }),
      GroupName: (groupName: string) => ({ groupName: edmToTs(groupName, 'Edm.String') })
    });
  }
}
