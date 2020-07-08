/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ItemProjectField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ItemProject {
  export function build(json: { [keys: string]: FieldType }): ItemProject {
    return createComplexType(json, {
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      ValidFrom: (validFrom: Moment) => ({ validFrom: edmToTs(validFrom, 'Edm.DateTimeOffset') }),
      ValidTo: (validTo: Moment) => ({ validTo: edmToTs(validTo, 'Edm.DateTimeOffset') }),
      Project: (project: string) => ({ project: edmToTs(project, 'Edm.String') })
    });
  }
}
