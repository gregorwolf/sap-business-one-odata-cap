/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TechnicianSettings
 */
export interface TechnicianSettings {
  /**
   * Technician.
   * @nullable
   */
  technician?: number;
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TechnicianSettings.build]] instead.
 */
export function createTechnicianSettings(json: any): TechnicianSettings {
  return TechnicianSettings.build(json);
}

/**
 * TechnicianSettingsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TechnicianSettingsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TechnicianSettings> {
  /**
   * Representation of the [[TechnicianSettings.technician]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  technician: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Technician', this, 'Edm.Int32');
  /**
   * Representation of the [[TechnicianSettings.groupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GroupCode', this, 'Edm.Int32');

  /**
   * Creates an instance of TechnicianSettingsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TechnicianSettings);
  }
}

export namespace TechnicianSettings {
  /**
   * Metadata information on all properties of the `TechnicianSettings` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TechnicianSettings>[] = [{
    originalName: 'Technician',
    name: 'technician',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'GroupCode',
    name: 'groupCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TechnicianSettings {
    return deserializeComplexTypeV4(json, TechnicianSettings);
  }
}
