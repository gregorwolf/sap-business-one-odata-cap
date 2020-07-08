/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CommissionGroupParams
 */
export interface CommissionGroupParams {
  /**
   * Commission Group Code.
   * @nullable
   */
  commissionGroupCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CommissionGroupParams.build]] instead.
 */
export function createCommissionGroupParams(json: any): CommissionGroupParams {
  return CommissionGroupParams.build(json);
}

/**
 * CommissionGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CommissionGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CommissionGroupParams.commissionGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  commissionGroupCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CommissionGroupCode', this, 'Edm.Int32');
}

export namespace CommissionGroupParams {
  export function build(json: { [keys: string]: FieldType }): CommissionGroupParams {
    return createComplexType(json, {
      CommissionGroupCode: (commissionGroupCode: number) => ({ commissionGroupCode: edmToTs(commissionGroupCode, 'Edm.Int32') })
    });
  }
}
