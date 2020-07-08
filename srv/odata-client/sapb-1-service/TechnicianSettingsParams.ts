/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class TechnicianSettingsParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TechnicianSettingsParams.technician]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  technician: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Technician', this, 'Edm.Int32');
}

export namespace TechnicianSettingsParams {
  export function build(json: { [keys: string]: FieldType }): TechnicianSettingsParams {
    return createComplexType(json, {
      Technician: (technician: number) => ({ technician: edmToTs(technician, 'Edm.Int32') })
    });
  }
}
