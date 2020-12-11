/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * RouteStageParams
 */
export interface RouteStageParams {
  /**
   * Internal Number.
   * @nullable
   */
  internalNumber?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: Moment;
  /**
   * Generation Time.
   * @nullable
   */
  generationTime?: Time;
  /**
   * Date Of Update.
   * @nullable
   */
  dateOfUpdate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[RouteStageParams.build]] instead.
 */
export function createRouteStageParams(json: any): RouteStageParams {
  return RouteStageParams.build(json);
}

/**
 * RouteStageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RouteStageParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RouteStageParams> {
  /**
   * Representation of the [[RouteStageParams.internalNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InternalNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[RouteStageParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[RouteStageParams.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');
  /**
   * Representation of the [[RouteStageParams.creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creationDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CreationDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[RouteStageParams.generationTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  generationTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('GenerationTime', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[RouteStageParams.dateOfUpdate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateOfUpdate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DateOfUpdate', this, 'Edm.DateTimeOffset');

  /**
   * Creates an instance of RouteStageParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, RouteStageParams);
  }
}

export namespace RouteStageParams {
  /**
   * Metadata information on all properties of the `RouteStageParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RouteStageParams>[] = [{
    originalName: 'InternalNumber',
    name: 'internalNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Description',
    name: 'description',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CreationDate',
    name: 'creationDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'GenerationTime',
    name: 'generationTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'DateOfUpdate',
    name: 'dateOfUpdate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): RouteStageParams {
    return deserializeComplexTypeV4(json, RouteStageParams);
  }
}
