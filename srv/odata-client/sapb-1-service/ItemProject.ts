/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ItemProject
 */
export interface ItemProject {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: Moment;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: Moment;
  /**
   * Project.
   * @nullable
   */
  project?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemProject.build]] instead.
 */
export function createItemProject(json: any): ItemProject {
  return ItemProject.build(json);
}

/**
 * ItemProjectField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemProjectField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemProject> {
  /**
   * Representation of the [[ItemProject.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemProject.validFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  validFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ValidFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ItemProject.validTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  validTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ValidTo', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ItemProject.project]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  project: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Project', this, 'Edm.String');

  /**
   * Creates an instance of ItemProjectField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemProject);
  }
}

export namespace ItemProject {
  /**
   * Metadata information on all properties of the `ItemProject` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemProject>[] = [{
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ValidFrom',
    name: 'validFrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ValidTo',
    name: 'validTo',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Project',
    name: 'project',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ItemProject {
    return deserializeComplexTypeV4(json, ItemProject);
  }
}
