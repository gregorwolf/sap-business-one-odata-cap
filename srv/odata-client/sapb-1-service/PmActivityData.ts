/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PmActivityData
 */
export interface PmActivityData {
  /**
   * Line Id.
   * @nullable
   */
  lineId?: number;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: number;
  /**
   * Activity Id.
   * @nullable
   */
  activityId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PmActivityData.build]] instead.
 */
export function createPmActivityData(json: any): PmActivityData {
  return PmActivityData.build(json);
}

/**
 * PmActivityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmActivityDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmActivityData> {
  /**
   * Representation of the [[PmActivityData.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmActivityData.stageId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmActivityData.activityId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActivityID', this, 'Edm.Int32');

  /**
   * Creates an instance of PmActivityDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmActivityData);
  }
}

export namespace PmActivityData {
  /**
   * Metadata information on all properties of the `PmActivityData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmActivityData>[] = [{
    originalName: 'LineID',
    name: 'lineId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StageID',
    name: 'stageId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ActivityID',
    name: 'activityId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PmActivityData {
    return deserializeComplexTypeV4(json, PmActivityData);
  }
}
