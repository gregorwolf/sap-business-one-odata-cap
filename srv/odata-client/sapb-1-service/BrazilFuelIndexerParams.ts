/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BrazilFuelIndexerParams
 */
export interface BrazilFuelIndexerParams {
  /**
   * Fuel Id.
   * @nullable
   */
  fuelId?: number;
  /**
   * Fuel Group Code.
   * @nullable
   */
  fuelGroupCode?: number;
  /**
   * Fuel Code.
   * @nullable
   */
  fuelCode?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BrazilFuelIndexerParams.build]] instead.
 */
export function createBrazilFuelIndexerParams(json: any): BrazilFuelIndexerParams {
  return BrazilFuelIndexerParams.build(json);
}

/**
 * BrazilFuelIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BrazilFuelIndexerParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BrazilFuelIndexerParams.fuelId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fuelId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FuelID', this, 'Edm.Int32');
  /**
   * Representation of the [[BrazilFuelIndexerParams.fuelGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fuelGroupCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FuelGroupCode', this, 'Edm.Int32');
  /**
   * Representation of the [[BrazilFuelIndexerParams.fuelCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fuelCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FuelCode', this, 'Edm.String');
  /**
   * Representation of the [[BrazilFuelIndexerParams.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');
}

export namespace BrazilFuelIndexerParams {
  export function build(json: { [keys: string]: FieldType }): BrazilFuelIndexerParams {
    return createComplexType(json, {
      FuelID: (fuelId: number) => ({ fuelId: edmToTs(fuelId, 'Edm.Int32') }),
      FuelGroupCode: (fuelGroupCode: number) => ({ fuelGroupCode: edmToTs(fuelGroupCode, 'Edm.Int32') }),
      FuelCode: (fuelCode: string) => ({ fuelCode: edmToTs(fuelCode, 'Edm.String') }),
      Description: (description: string) => ({ description: edmToTs(description, 'Edm.String') })
    });
  }
}
