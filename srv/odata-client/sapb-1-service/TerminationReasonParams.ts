/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TerminationReasonParams
 */
export interface TerminationReasonParams {
  /**
   * Reason Id.
   * @nullable
   */
  reasonId?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[TerminationReasonParams.build]] instead.
 */
export function createTerminationReasonParams(json: any): TerminationReasonParams {
  return TerminationReasonParams.build(json);
}

/**
 * TerminationReasonParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TerminationReasonParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TerminationReasonParams> {
  /**
   * Representation of the [[TerminationReasonParams.reasonId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reasonId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReasonID', this, 'Edm.Int32');
  /**
   * Representation of the [[TerminationReasonParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[TerminationReasonParams.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');

  /**
   * Creates an instance of TerminationReasonParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TerminationReasonParams);
  }
}

export namespace TerminationReasonParams {
  /**
   * Metadata information on all properties of the `TerminationReasonParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TerminationReasonParams>[] = [{
    originalName: 'ReasonID',
    name: 'reasonId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Description',
    name: 'description',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TerminationReasonParams {
    return deserializeComplexTypeV4(json, TerminationReasonParams);
  }
}
