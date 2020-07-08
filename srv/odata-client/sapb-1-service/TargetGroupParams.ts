/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TargetGroupParams
 */
export interface TargetGroupParams {
  /**
   * Target Group Code.
   * @nullable
   */
  targetGroupCode?: string;
  /**
   * Target Group Name.
   * @nullable
   */
  targetGroupName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[TargetGroupParams.build]] instead.
 */
export function createTargetGroupParams(json: any): TargetGroupParams {
  return TargetGroupParams.build(json);
}

/**
 * TargetGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TargetGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TargetGroupParams.targetGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetGroupCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TargetGroupCode', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupParams.targetGroupName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetGroupName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TargetGroupName', this, 'Edm.String');
}

export namespace TargetGroupParams {
  export function build(json: { [keys: string]: FieldType }): TargetGroupParams {
    return createComplexType(json, {
      TargetGroupCode: (targetGroupCode: string) => ({ targetGroupCode: edmToTs(targetGroupCode, 'Edm.String') }),
      TargetGroupName: (targetGroupName: string) => ({ targetGroupName: edmToTs(targetGroupName, 'Edm.String') })
    });
  }
}
