/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class FiscalPrinterParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FiscalPrinterParams> {
  /**
   * Representation of the [[FiscalPrinterParams.equipmentNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equipmentNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EquipmentNo', this, 'Edm.String');

  /**
   * Creates an instance of FiscalPrinterParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, FiscalPrinterParams);
  }
}

export namespace FiscalPrinterParams {
  /**
   * Metadata information on all properties of the `FiscalPrinterParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<FiscalPrinterParams>[] = [{
    originalName: 'EquipmentNo',
    name: 'equipmentNo',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): FiscalPrinterParams {
    return deserializeComplexTypeV4(json, FiscalPrinterParams);
  }
}
