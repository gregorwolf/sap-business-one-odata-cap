/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WorkflowTaskOutputObject
 */
export interface WorkflowTaskOutputObject {
  /**
   * Task Id.
   * @nullable
   */
  taskId?: number;
  /**
   * Line Id.
   * @nullable
   */
  lineId?: string;
  /**
   * Type.
   * @nullable
   */
  type?: string;
  /**
   * Key.
   * @nullable
   */
  key?: string;
  /**
   * Sub Type.
   * @nullable
   */
  subType?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[WorkflowTaskOutputObject.build]] instead.
 */
export function createWorkflowTaskOutputObject(json: any): WorkflowTaskOutputObject {
  return WorkflowTaskOutputObject.build(json);
}

/**
 * WorkflowTaskOutputObjectField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WorkflowTaskOutputObjectField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WorkflowTaskOutputObject> {
  /**
   * Representation of the [[WorkflowTaskOutputObject.taskId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taskId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaskID', this, 'Edm.Int32');
  /**
   * Representation of the [[WorkflowTaskOutputObject.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LineId', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTaskOutputObject.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Type', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTaskOutputObject.key]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  key: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Key', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTaskOutputObject.subType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SubType', this, 'Edm.String');

  /**
   * Creates an instance of WorkflowTaskOutputObjectField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WorkflowTaskOutputObject);
  }
}

export namespace WorkflowTaskOutputObject {
  /**
   * Metadata information on all properties of the `WorkflowTaskOutputObject` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WorkflowTaskOutputObject>[] = [{
    originalName: 'TaskID',
    name: 'taskId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineId',
    name: 'lineId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Type',
    name: 'type',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Key',
    name: 'key',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SubType',
    name: 'subType',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WorkflowTaskOutputObject {
    return deserializeComplexTypeV4(json, WorkflowTaskOutputObject);
  }
}
