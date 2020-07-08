/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class RouteStageParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace RouteStageParams {
  export function build(json: { [keys: string]: FieldType }): RouteStageParams {
    return createComplexType(json, {
      InternalNumber: (internalNumber: number) => ({ internalNumber: edmToTs(internalNumber, 'Edm.Int32') }),
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      Description: (description: string) => ({ description: edmToTs(description, 'Edm.String') }),
      CreationDate: (creationDate: Moment) => ({ creationDate: edmToTs(creationDate, 'Edm.DateTimeOffset') }),
      GenerationTime: (generationTime: Time) => ({ generationTime: edmToTs(generationTime, 'Edm.TimeOfDay') }),
      DateOfUpdate: (dateOfUpdate: Moment) => ({ dateOfUpdate: edmToTs(dateOfUpdate, 'Edm.DateTimeOffset') })
    });
  }
}
