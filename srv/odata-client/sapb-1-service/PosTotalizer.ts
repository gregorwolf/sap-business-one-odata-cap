/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PosTotalizer
 */
export interface PosTotalizer {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Number.
   * @nullable
   */
  number?: number;
  /**
   * Total.
   * @nullable
   */
  total?: number;
  /**
   * Description.
   * @nullable
   */
  description?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PosTotalizer.build]] instead.
 */
export function createPosTotalizer(json: any): PosTotalizer {
  return PosTotalizer.build(json);
}

/**
 * PosTotalizerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PosTotalizerField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PosTotalizer.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[PosTotalizer.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[PosTotalizer.number]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  number: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Number', this, 'Edm.Int32');
  /**
   * Representation of the [[PosTotalizer.total]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  total: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Total', this, 'Edm.Double');
  /**
   * Representation of the [[PosTotalizer.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');
}

export namespace PosTotalizer {
  export function build(json: { [keys: string]: FieldType }): PosTotalizer {
    return createComplexType(json, {
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      Number: (number: number) => ({ number: edmToTs(number, 'Edm.Int32') }),
      Total: (total: number) => ({ total: edmToTs(total, 'Edm.Double') }),
      Description: (description: string) => ({ description: edmToTs(description, 'Edm.String') })
    });
  }
}
