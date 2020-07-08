/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ProfitCenterParams
 */
export interface ProfitCenterParams {
  /**
   * Center Code.
   * @nullable
   */
  centerCode?: string;
  /**
   * Center Name.
   * @nullable
   */
  centerName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ProfitCenterParams.build]] instead.
 */
export function createProfitCenterParams(json: any): ProfitCenterParams {
  return ProfitCenterParams.build(json);
}

/**
 * ProfitCenterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProfitCenterParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ProfitCenterParams.centerCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  centerCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CenterCode', this, 'Edm.String');
  /**
   * Representation of the [[ProfitCenterParams.centerName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  centerName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CenterName', this, 'Edm.String');
}

export namespace ProfitCenterParams {
  export function build(json: { [keys: string]: FieldType }): ProfitCenterParams {
    return createComplexType(json, {
      CenterCode: (centerCode: string) => ({ centerCode: edmToTs(centerCode, 'Edm.String') }),
      CenterName: (centerName: string) => ({ centerName: edmToTs(centerName, 'Edm.String') })
    });
  }
}
