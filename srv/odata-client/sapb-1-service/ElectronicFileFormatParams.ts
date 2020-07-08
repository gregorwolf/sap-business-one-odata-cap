/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ElectronicFileFormatParams
 */
export interface ElectronicFileFormatParams {
  /**
   * Format Id.
   * @nullable
   */
  formatId?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ElectronicFileFormatParams.build]] instead.
 */
export function createElectronicFileFormatParams(json: any): ElectronicFileFormatParams {
  return ElectronicFileFormatParams.build(json);
}

/**
 * ElectronicFileFormatParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ElectronicFileFormatParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ElectronicFileFormatParams.formatId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formatId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FormatID', this, 'Edm.Int32');
  /**
   * Representation of the [[ElectronicFileFormatParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
}

export namespace ElectronicFileFormatParams {
  export function build(json: { [keys: string]: FieldType }): ElectronicFileFormatParams {
    return createComplexType(json, {
      FormatID: (formatId: number) => ({ formatId: edmToTs(formatId, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') })
    });
  }
}
