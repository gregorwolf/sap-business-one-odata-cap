/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TechnicianSettingsParams
 */
export interface TechnicianSettingsParams {
  /**
   * Technician.
   * @nullable
   */
  technician?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TechnicianSettingsParams.build]] instead.
 */
export function createTechnicianSettingsParams(json: any): TechnicianSettingsParams {
  return TechnicianSettingsParams.build(json);
}

/**
 * TechnicianSettingsParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TechnicianSettingsParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TechnicianSettingsParams> {
  /**
   * Representation of the [[TechnicianSettingsParams.technician]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  technician: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Technician', this, 'Edm.Int32');

  /**
   * Creates an instance of TechnicianSettingsParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TechnicianSettingsParams);
  }
}

export namespace TechnicianSettingsParams {
  /**
   * Metadata information on all properties of the `TechnicianSettingsParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TechnicianSettingsParams>[] = [{
    originalName: 'Technician',
    name: 'technician',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TechnicianSettingsParams {
    return deserializeComplexTypeV4(json, TechnicianSettingsParams);
  }
}
