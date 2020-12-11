/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ProjectParams
 */
export interface ProjectParams {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Name.
   * @nullable
   */
  name?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ProjectParams.build]] instead.
 */
export function createProjectParams(json: any): ProjectParams {
  return ProjectParams.build(json);
}

/**
 * ProjectParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProjectParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProjectParams> {
  /**
   * Representation of the [[ProjectParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[ProjectParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');

  /**
   * Creates an instance of ProjectParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ProjectParams);
  }
}

export namespace ProjectParams {
  /**
   * Metadata information on all properties of the `ProjectParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProjectParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ProjectParams {
    return deserializeComplexTypeV4(json, ProjectParams);
  }
}
