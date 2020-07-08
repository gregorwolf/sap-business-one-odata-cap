/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TechnicianSettingsGroup
 */
export interface TechnicianSettingsGroup {
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Advanced Dash Board.
   * @nullable
   */
  advancedDashBoard?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TechnicianSettingsGroup.build]] instead.
 */
export function createTechnicianSettingsGroup(json: any): TechnicianSettingsGroup {
  return TechnicianSettingsGroup.build(json);
}

/**
 * TechnicianSettingsGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TechnicianSettingsGroupField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TechnicianSettingsGroup.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[TechnicianSettingsGroup.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[TechnicianSettingsGroup.advancedDashBoard]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  advancedDashBoard: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdvancedDashBoard', this, 'Edm.Int32');
}

export namespace TechnicianSettingsGroup {
  export function build(json: { [keys: string]: FieldType }): TechnicianSettingsGroup {
    return createComplexType(json, {
      Code: (code: number) => ({ code: edmToTs(code, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      AdvancedDashBoard: (advancedDashBoard: number) => ({ advancedDashBoard: edmToTs(advancedDashBoard, 'Edm.Int32') })
    });
  }
}
