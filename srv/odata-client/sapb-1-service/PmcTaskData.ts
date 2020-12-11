/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PmcTaskData
 */
export interface PmcTaskData {
  /**
   * Task Id.
   * @nullable
   */
  taskId?: number;
  /**
   * Task Name.
   * @nullable
   */
  taskName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PmcTaskData.build]] instead.
 */
export function createPmcTaskData(json: any): PmcTaskData {
  return PmcTaskData.build(json);
}

/**
 * PmcTaskDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmcTaskDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmcTaskData> {
  /**
   * Representation of the [[PmcTaskData.taskId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taskId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaskID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmcTaskData.taskName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taskName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaskName', this, 'Edm.String');

  /**
   * Creates an instance of PmcTaskDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmcTaskData);
  }
}

export namespace PmcTaskData {
  /**
   * Metadata information on all properties of the `PmcTaskData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmcTaskData>[] = [{
    originalName: 'TaskID',
    name: 'taskId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TaskName',
    name: 'taskName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PmcTaskData {
    return deserializeComplexTypeV4(json, PmcTaskData);
  }
}
