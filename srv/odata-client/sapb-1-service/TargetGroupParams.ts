/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class TargetGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TargetGroupParams> {
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

  /**
   * Creates an instance of TargetGroupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TargetGroupParams);
  }
}

export namespace TargetGroupParams {
  /**
   * Metadata information on all properties of the `TargetGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TargetGroupParams>[] = [{
    originalName: 'TargetGroupCode',
    name: 'targetGroupCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TargetGroupName',
    name: 'targetGroupName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TargetGroupParams {
    return deserializeComplexTypeV4(json, TargetGroupParams);
  }
}
