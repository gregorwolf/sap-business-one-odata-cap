/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class TechnicianSettingsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace TechnicianSettings {
  export function build(json: { [keys: string]: FieldType }): TechnicianSettings {
    return createComplexType(json, {
      Technician: (technician: number) => ({ technician: edmToTs(technician, 'Edm.Int32') }),
      GroupCode: (groupCode: number) => ({ groupCode: edmToTs(groupCode, 'Edm.Int32') })
    });
  }
}
