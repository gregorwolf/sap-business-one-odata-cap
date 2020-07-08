/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * FiscalPrinterParams
 */
export interface FiscalPrinterParams {
  /**
   * Equipment No.
   * @nullable
   */
  equipmentNo?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[FiscalPrinterParams.build]] instead.
 */
export function createFiscalPrinterParams(json: any): FiscalPrinterParams {
  return FiscalPrinterParams.build(json);
}

/**
 * FiscalPrinterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class FiscalPrinterParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[FiscalPrinterParams.equipmentNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equipmentNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EquipmentNo', this, 'Edm.String');
}

export namespace FiscalPrinterParams {
  export function build(json: { [keys: string]: FieldType }): FiscalPrinterParams {
    return createComplexType(json, {
      EquipmentNo: (equipmentNo: string) => ({ equipmentNo: edmToTs(equipmentNo, 'Edm.String') })
    });
  }
}
